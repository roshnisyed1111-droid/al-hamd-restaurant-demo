import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Phone, ShoppingBag, ArrowRight, AlertCircle, Check } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'Dine-in' | 'Takeout'>('Takeout');

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + (item.item.price * item.quantity), 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] shadow-2xl border-l border-[#E5DFD4] flex flex-col justify-between animate-slideInRight">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E8E1D5] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1C201E] text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#E87A5D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#1C201E]">
                  Your Order Tray
                </h3>
                <p className="text-xs text-[#7A7165]">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#7A7165] hover:text-[#1C201E] hover:bg-[#F2ECE1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Dine-in vs Takeout Switch */}
            <div className="bg-[#F0EAE0] p-1 rounded-xl flex">
              <button
                onClick={() => setOrderType('Takeout')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  orderType === 'Takeout'
                    ? 'bg-white text-[#1C201E] shadow-xs'
                    : 'text-[#635A4F] hover:text-[#1C201E]'
                }`}
              >
                Takeout / Parcel
              </button>
              <button
                onClick={() => setOrderType('Dine-in')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  orderType === 'Dine-in'
                    ? 'bg-white text-[#1C201E] shadow-xs'
                    : 'text-[#635A4F] hover:text-[#1C201E]'
                }`}
              >
                Dine-in Table
              </button>
            </div>

            {/* Empty State */}
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F0EAE0] flex items-center justify-center text-[#8C8275] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-[#1C201E]">Your tray is empty</h4>
                <p className="text-xs text-[#7A7165] mt-1 max-w-[220px]">
                  Explore the menu to add delicious chicken karahi, BBQ, or shahi daal.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#1C201E] text-white text-xs font-bold hover:bg-[#C2410C] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-xl border border-[#E8E1D5] shadow-xs flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <h4 className="text-sm font-bold text-[#1C201E] truncate">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#C2410C] font-bold mt-0.5">
                        PKR {(item.price * quantity).toLocaleString()}
                        <span className="text-[10px] text-[#8C8275] font-normal ml-1">
                          (PKR {item.price.toLocaleString()} each)
                        </span>
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-1 bg-[#F5EFEB] rounded-lg p-1 border border-[#DDD5C7]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#554C41] hover:bg-white transition-colors"
                        title="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#1C201E] w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#554C41] hover:bg-white transition-colors"
                        title="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9E9385] hover:text-[#DC2626] p-1.5 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <div className="flex justify-end pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-[#8C8275] hover:text-[#DC2626] font-medium underline"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}

            {/* Demo Notice Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#92400E] leading-relaxed">
                <strong>Demo Order Tray:</strong> Al-Hamd Restaurant prepares orders freshly in Larkana. Call directly at <strong>{RESTAURANT_INFO.phoneDisplay}</strong> to confirm your dine-in table or takeout order!
              </div>
            </div>

          </div>

          {/* Footer & Direct Call Action */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E1D5] space-y-4">
              <div className="space-y-1.5 text-xs text-[#5D554B]">
                <div className="flex justify-between">
                  <span>Selected Items ({totalItemCount}):</span>
                  <span>PKR {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Type:</span>
                  <span className="font-semibold text-[#1C201E]">{orderType}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#1C201E] pt-2 border-t border-[#EDE6DB]">
                  <span>Estimated Total:</span>
                  <span className="text-[#C2410C]">PKR {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Call to Order CTA */}
              <a
                id="cart-call-to-order-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full py-3.5 px-4 bg-[#C2410C] hover:bg-[#A33406] text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phoneDisplay} to Order</span>
              </a>

              <p className="text-center text-[10px] text-[#8C8275]">
                Al-Hamd Restaurant & Bar B.Q. • G.T Road, Larkana, Sindh
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
