import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
    RouterProvider,
  } from "react-router-dom";

// Pages nhóm khách hàng
import GuestBookingHistory from "../pages/guest/Booking/guest_booking_history";
import BookingDetail from "../pages/hotel_manager/Booking/hotel_booking_detail";
import Payment from "../pages/guest/Booking/payment";
import HotelSearching from "../pages/guest/Hotel_Searching/hotel_searching";
import HotelDetail from "../pages/guest/Hotel_Searching/hotel_detail";
import HotelCheckin from "../pages/guest/Hotel_Searching/hotel_checkin";
import CancelBooking from "../pages/guest/Booking/booking_cancel";

// Pages nhóm quản lý khách sạn
import HotelBookingHistory from "../pages/hotel_manager/Booking/hotel_booking_history";
import HotelBookingDetail from "../pages/hotel_manager/Booking/hotel_booking_detail";
import Room from "../pages/hotel_manager/Room/room";
import RoomType from "../pages/hotel_manager/Room/room_type";
import HotelInformation from "../pages/hotel_manager/Settings/hotel_information";

// homepage
// import LogIn from "../pages/SSO/Login/login";
import Account from "../pages/account";
import Home from "../pages/homepage/home";
import About from "../pages/homepage/about";

// SSO
import CreateAccount from "../pages/SSO/Create_Account/create_acount";
import Contact from "../pages/homepage/contact";

// Layout
import SSOLayout from "../pages/SSO/SSOLayout";
import MainLayout from "../components/MainLayout";
import Container from "../pages/container";
import GLayout from "../pages/guest/GLayout";
import HMLayout from "../pages/hotel_manager/HMLayout";
import LogIn from "../pages/SSO/Login/login";

const Router: React.FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="sso" element={<SSOLayout />}>
                    <Route path="login" element={<LogIn />} />  
                    <Route path="createaccount" element={<CreateAccount />} />
                </Route>

                <Route path="hotel" element={<HMLayout />} >
                    <Route index element={<Home />} />
                    <Route path="booking" element={<Container />}>
                        <Route index element={<HotelBookingHistory />} /> 
                        <Route path="history" element={<HotelBookingHistory />} />
                        <Route path=":id" element={<HotelBookingDetail />} /> 
                    </Route>
                    <Route path="room" element={<Container /> } >
                        <Route index element={<RoomType />} />
                        <Route path="roomtype" element={<RoomType />} />
                        <Route path=":type/:no" element={<Room />} />
                    </Route>
                    <Route path="settings" element={<Container />} >
                        <Route index element={<HotelInformation />} />
                        <Route path="hotelinf" element={<HotelInformation />} />
                        <Route path="account" element={<Account />} />
                    </Route>
                </Route>

                <Route path="guest" element={<GLayout />}>
                    <Route index element={<Home />} />
                    <Route path="hotel" element={<Container />}>
                        <Route index element={<HotelSearching />} /> 
                        <Route path="search" element={<HotelSearching />}>
                            <Route path="checkin" element={<HotelCheckin />} />
                        </Route>
                        <Route path=":id" element={<HotelDetail />} />
                    </Route>
                    <Route path="booking" element={<Container />}>
                        <Route index element={<GuestBookingHistory />} />
                        <Route path="history" element={<GuestBookingHistory />} />
                        <Route path=":id" element={<BookingDetail />} />
                        <Route path=":id/payment" element={<Payment />} />
                        <Route path=":id/cancel" element={<CancelBooking />} />
                    </Route>
                    <Route path="settings" element={<Container />} >
                        <Route path="account" element={<Account />} />
                    </Route>
                </Route>
            </Route>    
        )
    )
    return <RouterProvider router={router} />
};

export default Router;
