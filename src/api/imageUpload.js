
export const getImageUrl = async image => {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=78690ad21c72c2f24158ea85a809feac`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    })
    const data = await response.json();
    // return data.data.display_url;
    return data

}