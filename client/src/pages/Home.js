import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button,Box } from '@mui/material';
import './Home.css';

const Home = () => {
  const sections = [
    {
      title: 'Inventory Management System',
      description: 'This is a powerful tool for managing your inventory. It provides a comprehensive platform to organize, track, and maintain your inventory efficiently.',
      route: '/',
      className: 'intro-section',
    },
    {
      title: 'Add New Products',
      description: 'Easily add new products to your inventory. Streamline the process of including fresh items with detailed descriptions and necessary information.',
      route: '/addprod',
      className: 'section1',
    },
    {
      title: 'Add Suppliers Information',
      description: 'Manage and input supplier details seamlessly. Keep a record of vital supplier information for easy access and collaboration.',
      route: '/addsup',
      className: 'section2',
    },
    {
      title: 'View Supplier Details',
      description: 'Explore detailed supplier data effortlessly. Access comprehensive information on your suppliers, facilitating smoother communication and engagement.',
      route: '/data',
      className: 'section3',
    },
    {
      title: 'View Transaction Details',
      description: 'Get a comprehensive view of all your transactions. Dive into detailed transactional data to gain insights into your inventory movement.',
      route: '/trdata',
      className: 'section4',
    },
    {
      title: 'Show Transaction logs',
      description: 'Review and manage transaction logs effortlessly. Track and monitor all transactional activities to maintain a clear record of inventory movements.',
      route: '/log',
      className: 'section5',
    },
  ];

  return (
    <div className="home-content">
      {sections.map((section, index) => (
        <div
          className={`section ${section.className}`}
          id={section.className}
          key={index}
          style={{ width:'100%' }}
        >
          <Container>
            <Typography variant={section.className === 'intro-section' ? 'h1' : 'h3'}>
              {section.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body1" className="description-text">
                {section.description}
              </Typography>
              {section.className !== 'intro-section' && (
                <Button
                  component={Link}
                  to={section.route}
                  variant="contained"
                  color="primary"
                  className="button"
                >
                  Learn More
                </Button>
              )}
            </Box>
          </Container>
        </div>
      ))}

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Typography variant="body1">&copy; Stark Industries</Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
