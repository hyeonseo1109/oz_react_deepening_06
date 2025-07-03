import './App.css';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  //1. React Router의 `BrowserRouter`를 설정해야 합니다.
  //2. 메인 페이지에 Home 컴포넌트를 렌더링 해야 합니다.
  //3. /admin에서 Dashboard를 렌더링 해야 합니다. 이는 모든 /admin 경로에서 보입니다.
  //4. /admin/users에서 Users를 렌더링 해야 합니다.
  //5. /admin/users/:id에서 UserDetail를 렌더링 해야 합니다.
  //6. /admin/settings에서 Settings를 렌더링 해야 합니다.
  //7. /admin/<잘못된 페이지명>에서 NotFound를 렌더링 해야 합니다.

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}
//<Route path="users/:id" element={<UserDetail />} />
// users/뒤에 오는 걸 id로 저장하고 UserDetail을 보여준다.
export default App;


// 5리스트를 누르면 <Link>로 인해 주소가 /admin/users/5로 이동되고
// Router가 그걸 받아서 id=5로 저장하고, UserDetail 컴포넌트를 렌더링함.
// useParmas가 주소의 쿼리 파라미터에서 id를 꺼내서 
// user 중에서 id가 5인 애를 찾음
