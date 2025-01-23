using System;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<BasketDto>> GetBasket()
    {
        var basket = await RetriveBasket();

        if (basket == null) return NoContent();

        return basket.ToDto();
    }

    [HttpPost]
    public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
    {
        var basket = await RetriveBasket();

        basket ??= CreateBasket();

        var product = await context.Products.FindAsync(productId);
        if (product == null) return BadRequest("Problem adding item to basket");

        basket.AddItem(product, quantity);

        var result = await context.SaveChangesAsync() > 0;

        if (result) return CreatedAtAction(nameof(GetBasket), basket.ToDto());

        return BadRequest("Problem updating basket");
    }

    [HttpDelete]
    public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
    {
        // get basket
        var basket = await RetriveBasket();

        if (basket == null) return BadRequest("Basket is emppty nothing found");
        // remove the item or reduce its quantity
        basket.RemoveItem(productId, quantity);
        // save changes
        var result = await context.SaveChangesAsync() > 0;

        if (result) return NoContent();

        return BadRequest("Problem removing items from the basket");
    }

    private Basket CreateBasket()
    {
        var basketId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions
        {
            IsEssential = true,
            Expires = DateTime.UtcNow.AddDays(30),
        };
        Response.Cookies.Append("basketId", basketId, cookieOptions);
        var basket = new Basket { BasketId = basketId };
        context.Baskets.Add(basket);
        return basket;
    }

    private async Task<Basket?> RetriveBasket()
    {
        return await context.Baskets
            .Include(x => x.Items)
            .ThenInclude(x => x.Product)
            .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
    }
}
