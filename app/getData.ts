
// /app/getData
export type ApiResponseType = {
	imgTitle: string
	imgUrl : string
	imgDesc : string
}

export const getData = async (date: string): Promise<ApiResponseType> => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=yBHawwWwFcjgSRgd1QbPAxrmfRYQfqrIeOkFyupn&date=${date}`;
    let data;
    try {
        let res = await fetch(url);
        data = await res.json();
    } catch (err) {
        console.log(err);
        //make error handeling for this
        //return null;
        
    }
    let result: ApiResponseType = {
        imgTitle : data.title,
        imgUrl : data.url,
        imgDesc : data.explanation
    }; 
    return result


}