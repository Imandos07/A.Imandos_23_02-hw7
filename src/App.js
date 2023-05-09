import React from "react";
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">ФИО:</label>
      <input {...register("fullName")} id="fullName" type="text" />

      <label htmlFor="firstName">Имя:</label>
      <input {...register("firstName")} id="firstName" type="text" />

      <label htmlFor="birthYear">Год рождения:</label>
      <select {...register("birthYear")} id="birthYear">
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
      </select>

      <label htmlFor="gender">Пол:</label>
      <select {...register("gender")} id="gender">
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
        <option value="other">Другой</option>
      </select>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;
