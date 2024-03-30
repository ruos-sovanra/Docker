import {ConfirmIcon} from "@/Components/icons/FontAwsome";
import style from "./style.module.css";
import Button from "@/app/(user)/activate-confirm-email/[key]/components/Button";


type Props = {
    params: {
        key: string,
    },
    searchParams: any
}
const ActivateConfirmEmailPage = (props:Props) => {
  return (
      <main className={style.container}>
          {/* Confirm Email Card */}
          <section className="flex flex-col items-center">
              {/* Icon Confirm */}
              <ConfirmIcon color="#050" classname="h-44 w-44 mb-8"/>
              {/* Title */}
              <h1 className="text-6xl my-4">Email has been Confirmed!</h1>
              {/* Description */}
              <p className="text-3xl">
                  Your email confirmed with my api! you can go to login page by press below button!
              </p>
              <p className="text-3xl my-8">
                  សួស្តីអ្នកបានបញ្ជាក់អ៊ីមែលរបស់អ្នកដោយជោគជ័យ! អ្នកអាចចូលទៅទំព័រចូលដោយចុចប៊ូតទាញរួចខាងក្រោម!
              </p>
              {/* Button */}
              <Button title="Login"  classname="my-8"/>

          </section>
      </main>

  );
}

export default ActivateConfirmEmailPage;