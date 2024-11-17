export const royalUrls = {
  funcion_login_app: `/auth/login`,
  funcion_login_ewave: (document: string) =>
    `/api/v1/user/getUserEcall/${document}`,
  funcion_consultar_ciudades: `/cities`,
  funcion_consultar_tipo_doc: `/identity/allTypes`,
  funcion_consultar_teatro_por_ciudad: (ciudad: number) =>
    `/cinemas/city/${ciudad}`,
  funcion_registro_de_cliente: `/auth/signUp`,
  funcion_actualizar_cliente: `/auth/updateUser`,
  funcion_actualizar_clave: `/auth/updatePassword`,
  function_recuperarClave: `/auth/resetPassword`,
  getUptadeApp: `/configuration/appVersions`
};
