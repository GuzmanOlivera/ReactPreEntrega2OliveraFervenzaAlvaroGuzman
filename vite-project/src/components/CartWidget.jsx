import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    const itemsInCart = 5;

    return (
        <div className="flex items-center justify-end">
            <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            <span className="mr-1">{itemsInCart}</span>
        </div>
    );
};

export default CartWidget;
