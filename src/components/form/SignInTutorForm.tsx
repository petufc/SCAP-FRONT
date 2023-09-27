"use client";
import React, { useState } from "react";
import { FormData } from "@/components/Types/formSignInTutorTypes";
import TextInput from "@/components/SignInTutorComponents/TextInput";
import Button from "@/components/SignInTutorComponents/Button";

export default function SignInTutorForm() {
  const initialFormData: FormData = {
    nomeTutor: "",
    emailTutor: "",
    nomeBolsaTutor: "",
    campusTutor: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleCadastroClick = () => {
    console.log("Dados do formulário:", formData);

    setFormData(initialFormData);
  };

  return (
    <div>
      <div className="container mx-auto mt-7">
        <h1 className="text-neuteral-900 text-4xl text-center font-bold font-RobotoFlex mb-3">
          Cadastrar Tutor
        </h1>
        <div className="box w-custom  mx-auto p-6 font-inter border-2 border-gray-300 rounded-lg bg-slate-50/75">
          <form className="space-y-2">
            <div className="form-group">
              <label className="block mb-2 font-medium text-neutral-900">
                Nome do Tutor
              </label>
              <TextInput
                placeholder="Nome do tutor"
                value={formData.nomeTutor}
                onChange={(value) => handleInputChange("nomeTutor", value)}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2 font-medium text-neutral-900">
                Email do Tutor
              </label>
              <TextInput
                type="email"
                placeholder="Email do Tutor"
                value={formData.emailTutor}
                onChange={(value) => handleInputChange("emailTutor", value)}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2 font-medium text-neutral-900">
                Nome da Bolsa do Tutor
              </label>
              <TextInput
                placeholder="Nome da Bolsa do Tutor"
                value={formData.nomeBolsaTutor}
                onChange={(value) => handleInputChange("nomeBolsaTutor", value)}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2 font-medium text-neutral-900">
                Campus do Tutor
              </label>
              <TextInput
                placeholder="Campus do Tutor"
                value={formData.campusTutor}
                onChange={(value) => handleInputChange("campusTutor", value)}
              />
            </div>
          </form>
          <div className="flex justify-center space-x-2 > * + * mb-0 mt-3">
            <Button
              text="Cancelar"
              onClick={handleCadastroClick}
              variant="cancel"
            />
            <Button text="Cadastrar" onClick={handleCadastroClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
