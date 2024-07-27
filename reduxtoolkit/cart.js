// src/Cart.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const removeItemFromCart = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeItemFromCart(item.id)} />
          </View>
        )}
      />
      <Text>Total Quantity: {totalQuantity}</Text>
      <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
      <Button title="Clear Cart" onPress={clearCart} />
      <Button title="Add Item" onPress={() => addItemToCart({ id: 1, title: 'Item 1', price: 29.99 })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
});

export default Cart;
