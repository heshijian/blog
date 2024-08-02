import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Index';
import Blog from '@/pages/Blog/Index';
import BlogDetail from '@/pages/Blog/Detail';
import About from '@/pages/About/Index';
import Message from '@/pages/Message/Index';
import Project from '@/pages/Project/Index';
import NoFound from '@/pages/NoFound';
export default function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogDetail />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="*" element={<NoFound />}></Route>
        </Routes>
    );
}
