
import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "Testimonials", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
          
            className="app__navigation-dot"
            href={`#${item}`}
            key={item + index}
            style={active === item ? { backgroundColor: "#deb833" } : {}}
          />
           
        )
      )}
    </div>
  );
};

export default NavigationDots;
