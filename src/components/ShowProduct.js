import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, productsSelector, deleteProduct } from "../features/ProductSlice";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      <div>ShowProduct</div>
      <hr />
      <Link to="add">Add Product</Link>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`edit/${product.id}`}>Edit</Link>
                <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>Title :{title}</div>
      <div>Price :{price}</div> */}
    </div>
  );
};

export default ShowProduct;
