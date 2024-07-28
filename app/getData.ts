import { api_key } from "./api_key"

export type ApiResponseType = {
	imgTitle: string
	imgUrl : string
	imgDesc : string
}

export const getData = async (date: string): Promise<ApiResponseType> => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`;
    let data;
    try {
        let res = await fetch(url);
        data = await res.json();
    } catch (err) {
        console.log(err);
    }
    let result: ApiResponseType = {
        imgTitle : data.title,
        imgUrl : data.url,
        imgDesc : data.explanation
    }; 
    return result


}