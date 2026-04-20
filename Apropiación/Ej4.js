const defaults = { tema: "claro", idioma: "es" };

export function configurarUsuario(defaultsConfig, personalizadas) {
  const configuracionFinal = {
    ...defaultsConfig,
    ...personalizadas
  };

  const { idioma } = configuracionFinal;

  return idioma;
}

export { defaults };