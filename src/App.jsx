import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import Collaborations from './pages/Collaborations'
import Outreach from './pages/Outreach'
import Events from './pages/Events'
import Resources from './pages/Resources'
import ResourceTopic from './pages/ResourceTopic'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="collaborations" element={<Collaborations />} />
        <Route path="outreach" element={<Outreach />} />
        <Route path="events" element={<Events />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/sbs" element={<Navigate to="/resources/shaken-baby-syndrome" replace />} />
        <Route path="resources/:slug" element={<ResourceTopic />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
