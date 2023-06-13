import React, {useCallback, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useStyles} from './styles';
import {CARD_ENTRIES, CARD_IMAGES, CardEntry} from './constants';

const {width: viewportWidth} = Dimensions.get('window');

export const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const styles = useStyles();

  const renderItem = useCallback(
    ({item}: {item: CardEntry}) => {
      const ImageComponent = CARD_IMAGES[item.image];
      return (
        <View style={styles.card}>
          <ImageComponent width={300} height={300} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      );
    },
    [styles.card, styles.cardDescription, styles.cardTitle],
  );

  return (
    <>
      <View>
        <Carousel
          data={CARD_ENTRIES}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth - 90}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={CARD_ENTRIES.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyle}
          dotContainerStyle={styles.dotContainer}
          inactiveDotOpacity={0.2}
          inactiveDotScale={1}
        />
      </View>
    </>
  );
};
