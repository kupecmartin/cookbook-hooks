import React from "react";

export const RecipeFooter = props => {
  const { lastModifiedDate } = props;


  return (
    <div>
      Posledná úprava: {new Date(lastModifiedDate).toLocaleDateString('cs')}
    </div>
  );

};
