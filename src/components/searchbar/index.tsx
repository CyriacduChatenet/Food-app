import React, { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import useFetch from '../../hooks/useFetch';

interface IProps {
    mutator : Dispatch<SetStateAction<string>>;
    dataMutator : Dispatch<SetStateAction<never[]>>
}

const Searchbar: FC<IProps> = ({ mutator, dataMutator }) => {
    const [searchValue, setSearchValue] = useState('');

    const handlePress = () => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            const data = await response.json();
            return dataMutator(data.meals);
          };
          fetchData();
    };

    useMemo(() => {
        mutator(searchValue);
    }, [searchValue]);

    return (
        <View>
            <TextInput placeholder={'Search recipe'} onChangeText={setSearchValue} style={styles.searchbar} />
            <Button title={'Search'} onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: 'white'
    }
})

export default Searchbar;