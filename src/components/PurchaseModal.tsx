import React, { useState } from 'react';
import { X, CreditCard, Check, AlertCircle } from 'lucide-react';
import { Post } from '../types';
import PlatformSelector from './PlatformSelector';

interface PurchaseModalProps {
  post: Post;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ post, onClose }) => {
  const [step, setStep] = useState<'payment' | 'success' | 'platform'>('payment');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1500);
  };

  const handleUsePrompt = () => {
    setStep('platform');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="font-nunito font-bold text-xl text-gray-900 dark:text-white">
            {step === 'payment' && 'Purchase Prompt'}
            {step === 'success' && 'Purchase Complete!'}
            {step === 'platform' && 'Use Prompt'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
        
        {step === 'payment' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-nunito font-bold text-lg text-gray-900 dark:text-white mb-2">{post.promptTitle || "Premium Prompt"}</h3>
              <p className="font-nunito text-gray-600 dark:text-gray-300 mb-4">{post.promptDescription || post.promptPreview}</p>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="font-nunito text-gray-700 dark:text-gray-200">Price:</span>
                <span className="font-nunito font-bold text-secondary-600 dark:text-secondary-400">${post.price}</span>
              </div>
            </div>
            
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-4">
                <label className="block font-nunito text-gray-700 dark:text-gray-200 mb-2">Card Information</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="1234 1234 1234 1234"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <CreditCard size={20} className="text-gray-400 dark:text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label className="block font-nunito text-gray-700 dark:text-gray-200 mb-2">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-nunito text-gray-700 dark:text-gray-200 mb-2">CVC</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block font-nunito text-gray-700 dark:text-gray-200 mb-2">Name on Card</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-nunito focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center">
                  <AlertCircle size={18} className="mr-2" />
                  <span className="font-nunito">{error}</span>
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-secondary-600 hover:bg-secondary-700 disabled:bg-secondary-400 text-white font-nunito font-semibold py-3 px-4 rounded-lg transition duration-200 flex justify-center items-center"
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay $${post.price}`
                )}
              </button>
              
              <p className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400 font-nunito">
                Your payment is secured with Stripe. We do not store your card details.
              </p>
            </form>
          </div>
        )}
        
        {step === 'success' && (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-nunito font-bold text-xl text-gray-900 dark:text-white mb-2">Payment Successful!</h3>
            <p className="font-nunito text-gray-600 dark:text-gray-300 mb-6">
              You've successfully purchased this prompt. You can now use it in your projects.
            </p>
            <button 
              onClick={handleUsePrompt}
              className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-nunito font-semibold py-3 px-4 rounded-lg transition duration-200 mb-3"
            >
              Use Prompt Now
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-nunito font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Close
            </button>
          </div>
        )}
        
        {step === 'platform' && (
          <PlatformSelector promptId={post.id} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;
