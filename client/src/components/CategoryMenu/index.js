import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
	CATEGORIES_UPDATE,
	UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const CategoryMenu = () => {
	const [state, dispatch] = useStoreContext();

	const { categories } = state;

	const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

	useEffect(() => {
		console.log(categoryData);
		if (categoryData) {
			console.log(categoryData.categories);
			dispatch({
				type: CATEGORIES_UPDATE,
				categories: categoryData.categories,
			});
			categoryData.categories.forEach((category) => {
				idbPromise('categories', 'put', category);
			});
		}
		if (!loading) {
			idbPromise('categories', 'get').then((categories) => {
				dispatch({
					type: CATEGORIES_UPDATE,
					categories: categories,
				});
			});
		}
	}, [categoryData, loading, dispatch]);

	const handleClick = (id) => {
		dispatch({
			type: UPDATE_CURRENT_CATEGORY,
			currentCategory: id,
		});
	};

	return (
		<div class="tabs is-centered is-fullwidth is-boxed ">
			{categories.map((item) => (
				<ul>
				<li class="">
					<a key={item._id}onClick={() => {handleClick(item._id);}}>{item.name}</a>
				</li>
				</ul>
			))}
		</div>
	);
};

export default CategoryMenu;
