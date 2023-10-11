export const direccionamiento = (componente, routes, nameRoutes) => {
    
    const indexRoutes = {
      name_route: {
        first_name_route: nameRoutes.info,
        second_name_route: nameRoutes.portfolio
      },
      route: {
        first_route: routes.info,
        second_route: routes.portfolio
      }
    };

    const infoRoutes = {
      name_route: {
        first_name_route: nameRoutes.close,
        second_name_route: nameRoutes.portfolio
      },
      route: {
        first_route: routes.home,
        second_route: routes.portfolio
      }
    };

    const portfolioRoutes = {
      name_route: {
        first_name_route: nameRoutes.close,
        second_name_route: nameRoutes.portfolio
      },
      route: {
        first_route: routes.home,
        second_route: routes.portfolio
      }
    };
    
    const projectRoutes = {
      name_route: {
        first_name_route: nameRoutes.close,
        second_name_route: nameRoutes.portfolio
      },
      route: {
        first_route: routes.portfolio,
        second_route: routes.portfolio
      }
    };
  
    const rutas = {
      index: indexRoutes,
      info: infoRoutes,
      portfolio: portfolioRoutes,
      project: projectRoutes
    };
  
    return rutas[componente];
  };