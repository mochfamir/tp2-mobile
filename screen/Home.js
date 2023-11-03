import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  ActivityIndicator,
  MD2Colors,
  Searchbar,
} from "react-native-paper";
import { faker } from "@faker-js/faker";

const fetchCityData = async () => {
  try {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
    return [];
  }
};

const Home = ({ navigation }) => {
  const [cityData, setCityData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    fetchCityData()
      .then(({ data }) => {
        const listCity = data.map((datum) => ({
          id: datum["ID State"],
          name: datum["State"],
          population: datum["Population"],
          image: faker.image.urlLoremFlickr({ category: "city" }),
        }));
        setCityData(listCity);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredCities(cityData);
    } else {
      setFilteredCities(
        [...cityData].filter((datum) =>
          datum.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, cityData]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCityClick(item.name)}>
        <Card style={{ margin: 16 }}>
          <Card.Cover source={{ uri: item.image }} />
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>Population: {item.population}</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleCityClick = (city) => {
    navigation.navigate("Map", { city });
  };

  return (
    <View>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ margin: 16 }}
      />
      {filteredCities.length > 0 ? (
        <FlatList
          data={filteredCities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
    </View>
  );
};

export default Home;
