import Character from "../pages/character";
import Error from "../pages/404";
import Home from "../home/home";
import Header from "../templates/header";

const routes = {
    '/': Home,
    '/:id': Character,
    '/about' : 'About'
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = Header();
}

export default router;