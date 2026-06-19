"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function cadastrarPrato(formData: FormData) {
  // 1. Extraímos e tratamos os dados do formulário com segurança contra valores nulos
  const dados = {
    nome: String(formData.get("nome") ?? ""),
    descricao: String(formData.get("descricao") ?? ""),
    categoria: String(formData.get("categoria") ?? ""),
    preco: parseFloat(String(formData.get("preco") ?? "0")),
    imagem: String(formData.get("imagem") ?? ""),
    destacado: formData.get("destacado") === "on",
  };

  // 2. Enviamos para a API Real (POST)
  const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    throw new Error("Falha ao cadastrar o prato na API.");
  }

  // 3. Limpamos o cache da página de cardápio para o novo prato aparecer instantaneamente
  revalidatePath("/cardapio");

  // 4. Redirecionamos o usuário de volta para a listagem
  redirect("/cardapio");
}

export async function editarPrato(id: string, formData: FormData) {
  const dados = {
    nome: String(formData.get("nome") ?? ""),
    descricao: String(formData.get("descricao") ?? ""),
    categoria: String(formData.get("categoria") ?? ""),
    preco: parseFloat(String(formData.get("preco") ?? "0")),
    imagem: String(formData.get("imagem") ?? ""),
    destacado: formData.get("destacado") === "on",
  };

  await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  revalidatePath("/cardapio");
  revalidatePath(`/cardapio/${id}`);
  redirect("/cardapio");
}

// --- AÇÃO DE EXCLUIR ---
export async function excluirPrato(id: string) {
  await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/cardapio");
  // Não usamos redirect aqui pois a ação será chamada de dentro da lista
}