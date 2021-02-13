import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
import { RootState } from "../store";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const CartScreen = ({ match, location, history }: Props) => {
  const productId: string = match.params.id;

  const qty: number = location.search
    ? Number(location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();

  // Get cart items from state
  const cart = useSelector((state: RootState) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
