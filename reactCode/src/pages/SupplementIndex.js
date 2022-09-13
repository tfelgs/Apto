import React from "react";

export default function App() {
  const supplements = [
    {
      name: "Whey Protein",
    },
    {
      name: "Casein Protein",
    },
    {
      name: "Creatine",
    },
    {
      name: "Beta-Alanine",
    },
    {
      name: "Caffeine",
    },
  ];

  const [searchedArray, setSearchedArray] = React.useState(supplements);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray(supplements);
    } else {
      const searchedObjects = [];
      supplements.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
            searchedObjects.push(singleHeroObject);
            return;
          }
        });
      });
      setSearchedArray(searchedObjects);
    }
  }, [searchString]);

  return (
    <div className="App">
      <p>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder=" search... "
        />
      </p>
      <pre>{JSON.stringify(searchedArray, null, "    ")}</pre>
    </div>
  );
}
