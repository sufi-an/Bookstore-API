import { Op } from "sequelize";
import { isEmpty } from "lodash";

import { Cart } from "../models";
import { GetAllCartsFilters } from "./types";
import { CartInput, CartOuput } from "../models/Cart";

export const create = async (payload: CartInput): Promise<CartOuput> => {
  const cart = await Cart.create(payload);

  return cart;
};

export const findOrCreate = async (payload: CartInput): Promise<CartOuput> => {
  const [cart] = await Cart.findOrCreate({
    where: {
      userId: payload.userId,
    },
    defaults: payload,
  });

  return cart;
};

export const update = async (
  id: number,
  payload: Partial<CartInput>
): Promise<CartOuput> => {
  const cart = await Cart.findByPk(id);

  if (!cart) {
    // @todo throw custom error
    throw new Error("not found");
  }

  const updatedCart = await cart.update(payload);
  return updatedCart;
};

export const getById = async (id: number): Promise<CartOuput> => {
  const cart = await Cart.findByPk(id);

  if (!cart) {
    // @todo throw custom error
    throw new Error("not found");
  }

  return cart;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCartCount = await Cart.destroy({
    where: { id },
  });

  return !!deletedCartCount;
};

export const getAll = async (
  filters?: GetAllCartsFilters
): Promise<CartOuput[]> => {
  console.log(filters);
  const userId = filters?.user;
  if (userId) {
    return Cart.findAll({
      where: {
        userId,
      },
    });
  } else {
    return Cart.findAll({});
  }
};
