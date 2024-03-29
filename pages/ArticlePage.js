'use strict';

import React, {
  Component,
  ScrollView,
  View,
  Image,
} from 'react-native';

import Article from '../components/Article';
import Title from '../components/Title'
import styles from '../css';
import _ from 'lodash';

import CircleButton from '../components/CircleButton';
import {Actions} from 'react-native-router-flux';

function ucfirst(str) {
    var firstLetter = str.slice(0,1);
    return firstLetter.toUpperCase() + str.substring(1);
}

class ArticlePage extends Component {
  render() {
    return (
	<ScrollView style={styles.view}>
		<Title bgColor="rgba(175, 100, 15, 0.7)">{ucfirst(this.props.categorie)}</Title>
		{
			_.map(_.filter(this.props.getProducts(), {categorie: this.props.categorie}), (article) => {
				return (<Article src={{uri: article.img}} key={article.name} p_name={article.name} desc={article.description} prix={article.prix + " €"} addCommand={this.props.addCommand} removeProduct={this.props.removeProduct} removeCommand={this.props.removeCommand} user={_.isEmpty(this.props.getUser()) ? false : true}/>);
			})
		}
	</ScrollView>
    );
  }
}

export default ArticlePage;