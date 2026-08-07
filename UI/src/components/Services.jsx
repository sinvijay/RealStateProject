import { createRoot } from 'react-dom/client'

function Services() {
  return (
    <div className="services">
        <h1 style={{ color: 'orange', fontFamily: 'Arial' }}>Our Services</h1>
        <ul>
            <li>Property Buying and Selling</li>
            <li>Property Management</li>
            <li>Real Estate Consulting</li>
            <li>Market Analysis</li>
            <li>Investment Opportunities</li>
        </ul>
    </div>
  );
}
export default Services;