import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import {
    Routes,
    Route
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';




import AddProducts from './AddProducts/Addproducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';

const DashBoard = () => {
    const { admin } = useAuth();

    return (
        <div>


            <h1 className="text-center my-3 fw-bold">DashBoard</h1>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }}>Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }} to="/products">Products</NavLink>

                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }} to={`/dashboard/myorders`}>My Orders</NavLink>
                            
                            


                        </Nav>

                        <Nav>
                            {admin && <NavDropdown title="Admin Panel" style={{ color: "white" }} className="fw-bold active">
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`/dashboard/manageAllOrders`}>Manage All Orders</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`/dashboard/addProducts`}>Add Products</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`/dashboard/makeAdmin`}>Make Admin</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`/dashboard/manageProducts`}>Manage Products</NavLink>
                            </NavDropdown>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<MyOrders />} />

                <Route path={`/dashboard/myorders`} element={<MyOrders />} />

                <AdminRoute path={`/dashboard/manageAllOrders`} element={<ManageAllOrders />} />

                <AdminRoute path={`/dashboard/addProducts`} element={<AddProducts />} />

                <AdminRoute path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />
                
                <AdminRoute path={`/dashboard/manageProducts`} element={<ManageProducts />} />



                {/* <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/myorders`}>
                    <MyOrders></MyOrders>
                </Route> */}

                {/* <AdminRoute path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute> */}
                {/* <AdminRoute path={`${path}/addProducts`}>
                    <AddProducts></AddProducts>
                </AdminRoute> */}

                {/* <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute> */}

                {/* <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute> */}
            </Routes>





        </div>
    );
};

export default DashBoard;