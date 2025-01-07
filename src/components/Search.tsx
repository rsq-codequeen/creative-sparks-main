import { Autocomplete, AutocompleteProps, Box, Group, Image, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';

export function Search() {
  const navigate = useNavigate();
  const allItems = [...data.paintings, ...data.artSupplies, ...data.homeDecors, ...data.prints, ...data.exhibitions];
  const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({ option }) => {
    const item = allItems.find(item => item.name === option.value);
    return (
      <Group gap='sm' wrap='nowrap'>
        <Box h={30} w={30}>
          <Image src={item?.image} w={30} h={30} radius='md' />
        </Box>
        <Text size='sm' lineClamp={1}>
          {option.value}
        </Text>
      </Group>
    );
  };

  return (
    <Autocomplete
      data={allItems.map(item => ({ value: item.name }))}
      renderOption={renderAutocompleteOption}
      placeholder='Search...'
      limit={5}
      leftSection={<IconSearch size={14} />}
      onChange={val => {
        const painting = data.paintings.find(painting => painting.name === val);
        if (painting) {
          navigate(`/paintings/${painting.id}`);
          return;
        }
        const artSupply = data.artSupplies.find(artSupply => artSupply.name === val);
        if (artSupply) {
          navigate(`/art-supplies/${artSupply.id}`);
          return;
        }
        const homeDecor = data.homeDecors.find(homeDecor => homeDecor.name === val);
        if (homeDecor) {
          navigate(`/home-decor/${homeDecor.id}`);
          return;
        }
        const print = data.prints.find(print => print.name === val);
        if (print) {
          navigate(`/prints/${print.id}`);
          return;
        }
      }}
    />
  );
}
