import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          const customRouteNames = {
            company: 'Companies',
            info: 'Orders',
          };
          const routeName = customRouteNames[name] || name;
          return (
            <li key={name}>
              {isLast ? (
                <span>{routeName}</span>
              ) : (
                <Link to={routeTo}>{routeName}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;