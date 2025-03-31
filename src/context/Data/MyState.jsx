import { useEffect, useState } from "react";
import MyContext from "./MyContext"
import { fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export default function myState(props) {

  // 1. toggle dark and light mode

  const [darkMode, setDarkMode] = useState(false);

  const themeToggle = () => {

    if(darkMode){
      document.body.classList.remove('dark-mode')
      setDarkMode(false)
    }
    else{
      document.body.classList.add('dark-mode')
      setDarkMode(true)
    }

  }

  // 2. loader

  const [loading, setLoading] = useState(false);

  // 3. Products work around for Admin

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }
    )
  })

  // a. Adding product

  const addProduct = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // adding product to firestore
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products);
      toast.success("Product added in database");

      // calling 'getProduct' here function to instantly show the product in frontend once admin add the product
      getProduct();

      setLoading(false);
      
      // setTimeout(() => {
      //   navigate('/dashboard');
      // }, 2000)
      
    } 
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // b. Getting products

  const [product, setProduct] = useState([]);

  const getProduct = async () => {

    setLoading(true);

    try {

      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      );

      const productData = onSnapshot(q, QuerySnapshot => {

        let productArray = [];
        QuerySnapshot.forEach(doc => {
          productArray.push({...doc.data(), id: doc.id})
        })

        setProduct(productArray);
        setLoading(false);

      })

      return () => productData
      
    } catch (error) {
      toast.error("Couldn't get product");
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  // c. Updating and Deleting product work around

  const handleEdit = (item) => {
    setProducts(item);
  };

  // i. Update Product
  
  const updateProduct = async (e, item) => {
    e.preventDefault();

    setLoading(true);

    try {
      await setDoc(doc(fireDB, 'products', products.id), products);
      toast.success('Product updated successfully');

      // for getting instant updated product
      getProduct();

      setLoading(false);
    }

    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // ii. Delete product

  const deleteProduct = async (item) => {

    setLoading(true);

    try {
      
      await deleteDoc(doc(fireDB, 'products', item.id));
      toast.success('Product deleted successfuly');
      getProduct();
      setLoading(false);
    }
    
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (

  <MyContext.Provider 

    value={{darkMode, themeToggle, loading, setLoading, products, setProducts, addProduct, product, getProduct, handleEdit, updateProduct, deleteProduct}}>

    {props.children}

  </MyContext.Provider>

  );
}