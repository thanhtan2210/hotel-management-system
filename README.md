# Hotel Management System

## Giới thiệu
**Hotel Management System** là một hệ thống quản lý khách sạn được phát triển với **Django (Python) cho backend** và **React (TypeScript) cho frontend**. Hệ thống này giúp quản lý đặt phòng, khách hàng, nhân viên và các dịch vụ liên quan.

## Công nghệ sử dụng
- **Backend:** Django, Django REST Framework
- **Frontend:** React, TypeScript
- **Cơ sở dữ liệu:** Postgre SQL Database
- **Authentication:** JWT (JSON Web Token)
- **Cloud Services:** Neon database

## Cấu trúc thư mục
```
/hotel-management-system
│── back-end/          # Backend với Django
│── front-end/         # Frontend với React
│── README.md          # File mô tả dự án
│── requirements.txt   # Danh sách thư viện cần thiết cho backend
│── package.json       # Cấu hình và dependencies cho frontend
```

## Cách cài đặt và chạy dự án
### 1. Cài đặt Backend
```sh
cd back-end
python -m venv venv
source venv/bin/activate  # Trên macOS/Linux
venv\Scripts\activate     # Trên Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Cài đặt Frontend
```sh
cd front-end
npm install
npm run dev
```

## API Endpoints chính
- **Đặt phòng:** `POST /api/bookings/`
- **Danh sách phòng:** `GET /api/rooms/`
- **Thông tin khách hàng:** `GET /api/customers/{id}`
- **Đăng nhập:** `POST /api/auth/login/`
- **Đăng ký:** `POST /api/auth/register/`

## Liên hệ & Đóng góp
- Repository: [Hotel Management System](https://github.com/thanhtan2210/hotel-management-system.git)
- Tác giả: **Thanh Tan**
