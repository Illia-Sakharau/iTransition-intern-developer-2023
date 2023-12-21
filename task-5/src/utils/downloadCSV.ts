import { QueryParams } from "../types/persons";

const downloadCSV = async (props: QueryParams) => {
  const { seed, page, size, ln, errNum } = props;
  const queries = `seed=${seed}&page=1&size=${size*page}&ln=${ln}&errNum=${errNum}`;
  const response = await fetch('https://task-5-backend.onrender.com/persons/download?' + queries)

  if (response.status === 200) {
    const blob = await response.blob();
    const downloadURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'PersonsList.csv'
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

export default downloadCSV;
