"use client";
import Image from "next/image";
//note to self see if alt can be refactored with api data
interface ImageUrlType {
    url : string;
}

export default function MainImg( {url} : ImageUrlType){
	if(url.includes("youtube")){
    	return(
			<iframe width="700" height="500"
			src={url}>
			</iframe>
    	);
	}else{
		return(
    		<div>
        		<Image
        			src={url}
          			alt="Main Image"
          			width = {500}
          			height={500}
          			priority = {true}
        		/>
      		</div>
    	);
	}
}