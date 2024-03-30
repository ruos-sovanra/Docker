'use client'
import DataTable, {TableColumn} from 'react-data-table-component';
import {ProductType} from "@/lib/difinitions";
import {useEffect, useState} from "react";
import { Modal } from 'flowbite-react';
import Image from "next/image";

const DashboardPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false)}
      ).catch(err=>console.log(err))
  },[]);
  const columns: TableColumn<ProductType>[] = [
    {
      name: 'Product Name',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Image',
      selector: (row):any => <img src={row.image} alt={row.title} className="w-16 h-16"/>,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row):any => <div>
        <button className="text-blue-500 pe-2 " onClick={()=>handleView(row)}>view</button>
        <button className="text-yellow-400 pe-2 ">Update</button>
        <button className="text-red-500 ">Delete</button>
      </div>,

    }
  ];
  const handleView = (product: ProductType) => {
    setSelectedProduct(product);
    setOpenModal(true);
  }

  return <div className="h-screen text-3xl ">
    <DataTable
        fixedHeader={true}
      columns={columns}
      data={products}
      pagination
        customStyles={customStyles}
        striped
        highlightOnHover
  />
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <Image src={selectedProduct?.image || "No Image"}  alt={selectedProduct?.title || "No Title"} width={200} height={200}/>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  </div>;
}

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '36px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: '1.2rem',
    },
  },
  cells: {
    style: {
      paddingLeft: '36px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};



export default DashboardPage;