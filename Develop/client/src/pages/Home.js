import React from 'react';

export default function Home() {
	return (
		<main>
			<div>
				<div class='hero-body'>
					<p class='title'>Welcome</p>
					<p class='subtitle'>Look at this stuff... isn't it neat 😉</p>
				</div>
			</div>

			<div class='columns is-inline '>
				<div class='mb-4 mr-4 ml-4 catalog card column is-2 is-inline-flex'>
					<div class='card-image'>
						<figure class='image is-3by3'>
							<img src='{{product.img}}' alt='product' />
						</figure>

						<div class='card-content'>
							<div class='content'></div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
