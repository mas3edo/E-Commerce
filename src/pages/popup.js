// src/components/AddToCartModal.js

import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function AddToCartModal({ isOpen, onClose, item, totalPrice, totalItems }) {
  if (!isOpen || !item) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <Icon icon="mdi:check-circle" className="success-icon" />
          <h3>Successfully Added to Cart!</h3>
          <button className="close-button" onClick={onClose}>
            <Icon icon="mdi:close" />
          </button>
        </div>
        <div className="modal-body">
          <img src={item.images[0]} alt={item.title} className="item-image" />
          <div className="item-details">
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="cart-summary">
          There are now **{totalItems}** item(s) in your cart.
          <br />
          <strong>Subtotal: ${totalPrice.toFixed(2)}</strong>
        </div>
        <div className="modal-footer">
          <Link to="/cart" onClick={onClose} className="view-cart-btn">
            View Cart
          </Link>
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
      <style>{`
        /* Styles for the modal */
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; animation: fadeIn 0.3s ease; }
        .modal-content { background-color: white; padding: 25px; border-radius: 8px; width: 90%; max-width: 450px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); animation: slideIn 0.4s ease-out; }
        .modal-header { display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; position: relative; }
        .success-icon { color: #28a745; font-size: 24px; }
        .modal-header h3 { margin: 0; font-size: 18px; }
        .close-button { position: absolute; top: -10px; right: -10px; background: none; border: none; font-size: 24px; cursor: pointer; }
        .modal-body { display: flex; gap: 20px; align-items: center; }
        .item-image { width: 80px; height: 80px; object-fit: contain; border: 1px solid #eee; border-radius: 4px; }
        .item-details h4 { margin: 0 0 5px; font-size: 16px; }
        .item-details p { margin: 0; font-size: 16px; font-weight: 600; color: #DB4444; }
        .cart-summary { text-align: center; padding: 15px; margin-top: 20px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px; }
        .modal-footer { display: flex; justify-content: space-between; gap: 15px; margin-top: 20px; }
        .modal-footer button, .modal-footer a { flex-grow: 1; padding: 12px; border-radius: 4px; font-size: 15px; font-weight: 600; cursor: pointer; text-align: center; text-decoration: none; }
        .view-cart-btn { background-color: #DB4444; color: white; border: 1px solid #DB4444; }
        .continue-shopping-btn { background-color: #f5f5f5; color: #333; border: 1px solid #ddd; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

export default AddToCartModal;
