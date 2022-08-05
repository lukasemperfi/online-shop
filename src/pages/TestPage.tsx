import styled from 'styled-components';
import { MainButton } from '../components/MainButton/MainButton';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { TestButton } from './TestButton';



export const TestPage = () => {


    return (
        <PageContainer >
           <TestButton disabled>Colors Button</TestButton>
           <MainButton isLoading width='500px'>Main button</MainButton>
        </PageContainer>
    )
}






























  //   const [value, setValue] = useState('one')

  //   // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   //     setValue(event.target.value)
  //   // }

  //   const [files, setFiles] = useState<any>()
  //   const dispatch = useAppDispatch()
  
  //   // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   //   setFiles(event.target.files)
  //   // }
  
  //   function generateRandom(min = 100, max = 300) {
  
  //     // find diff
  //     let difference = max - min;
  
  //     // generate random number 
  //     let rand = Math.random();
  
  //     // multiply with difference 
  //     rand = Math.floor( rand * difference);
  
  //     // add with min value 
  //     rand = rand + min;
  
  //     return rand;
  // }
  
  // const wait = async (id: number) => {
  //        setTimeout(() => {
  //         console.log(id)
  //       }, 1000)
  // }
  
  //   useEffect(() => {
  //     if (files) {
  //       // onSubmitForm(files)
  //       console.log(files);
        
  //     }
  //   }, [files])
  
  //   const onSubmitForm = async (files: any) => {
  
  //     for (let index = 0; index < files.length; index++) {
  //       const file = files[index];
  
  //       const product = {
  //         name: file.name.slice(0, file.name.length - 4),
  //         price: generateRandom(),
  //         imageFile: file,
  //         gender: 'mens',
  //         type: 'sandals',
  //       }
  
  //       // console.log(index);
        
  //       //  await dispatch(addProduct(product))
  
  //     }
  
      
     
  
  //   }

  

// const product = {
//     name: 'test',
//     image: bigImg,
//     // image: '',
//     price: 2434,
//     id: 'dgsfgdfghdfh'
// }

// const options = [
//     { value: 'one', name: 'Price (Low to High)' },
//     { value: 'two', name: 'Price (High to Low)' },
//     { value: 'three', name: 'Three' },
// ]