import React from 'react'
import './GalleryPage.css'
import Godown from './Picsart_23-08-31_10-09-33-876.webp'
import bag from './bag.webp'

export default function GalleryPage() {
	return (
		<>
			<div style={{backgroundColor:"#f1f6fb"}} class="gallery-main">
				<div class="gallery">
					<div class="img">
						<img src={Godown}/>
					</div>
					<div class="img">
						<img src={bag}/>
					</div>
					<div class="img">
						<img src="https://img2.exportersindia.com/product_images/bc-full/dir_141/4220295/pellet-catel-feed-goli-pend-02-1503657332_p_3248191_607598.jpeg" />
					</div>
					<div class="img">
						<img src='https://5.imimg.com/data5/ANDROID/Default/2021/12/IL/WV/DZ/28559005/prod-20211221-2236546803794084979470086-jpg.jpg' />
					</div>
					<div class="img">
						<img src="https://5.imimg.com/data5/SELLER/Default/2022/9/IK/MG/SD/47161101/wheat-bran-wheat-choker-fine-bran.jpg" />
					</div>
					<div class="img">
						<img src="https://5.imimg.com/data5/SELLER/Default/2023/7/329564770/FS/UJ/NX/47161101/cattle-feed-cotton-seed-cake-500x500.jpg" />
					</div>
					<div class="img">
						<img src="https://img1.exportersindia.com/product_images/bc-small/dir_179/5352533/groundnut-oil-cake-1510995671-3460548.jpeg" />
					</div>
				</div>
			</div>
		</>
	)
}
