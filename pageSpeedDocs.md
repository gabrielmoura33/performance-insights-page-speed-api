Nome da propriedade	Valor	Descrição	Observações
captchaResult	string	O resultado da verificação do captcha

Os valores aceitáveis são:
"CAPTCHA_BLOCKING"
"CAPTCHA_MATCHED"
"CAPTCHA_NEEDED"
"CAPTCHA_NOT_NEEDED"
"CAPTCHA_UNMATCHED"
kind	string	Tipo de resultado.	
id	string	URL canônico e final para o documento, após os seguintes redirecionamentos de página (se houver).	
loadingExperience	nested object	Métricas de experiência de carregamento de página pelos usuários finais.	
loadingExperience.id	string	URL, padrão ou origem em que as métricas estão.	
loadingExperience.metrics	object		
loadingExperience.metrics.(key)	object	O tipo da métrica.	
loadingExperience.metrics.(key).distributions[]	list		
loadingExperience.metrics.(key).distributions[].min	integer		
loadingExperience.metrics.(key).distributions[].max	integer		
loadingExperience.metrics.(key).distributions[].proportion	double		
version	object	A versão do PageSpeed usada para gerar esses resultados.	
version.major	integer	É o número da versão principal do PageSpeed usado para gerar esses resultados.	
version.minor	integer	É o número da versão secundária do PageSpeed usado para gerar esses resultados.	
loadingExperience.metrics.(key).category	string	

Os valores aceitáveis são:
"AVERAGE"
"FAST"
"NONE"
"SLOW"
loadingExperience.overall_category	string	

Os valores aceitáveis são:
"AVERAGE"
"FAST"
"NONE"
"SLOW"
loadingExperience.initial_url	string		
loadingExperience.metrics.(key).percentile	integer		
originLoadingExperience	nested object	Métricas da experiência de carregamento de página agregado da origem	
originLoadingExperience.id	string	URL, padrão ou origem em que as métricas estão.	
originLoadingExperience.metrics	object		
originLoadingExperience.metrics.(key)	object	O tipo da métrica.	
originLoadingExperience.metrics.(key).percentile	integer		
originLoadingExperience.metrics.(key).distributions[]	list		
originLoadingExperience.metrics.(key).distributions[].min	integer		
originLoadingExperience.metrics.(key).distributions[].max	integer		
originLoadingExperience.metrics.(key).distributions[].proportion	double		
originLoadingExperience.metrics.(key).category	string	

Os valores aceitáveis são:
"AVERAGE"
"FAST"
"NONE"
"SLOW"
originLoadingExperience.overall_category	string	

Os valores aceitáveis são:
"AVERAGE"
"FAST"
"NONE"
"SLOW"
originLoadingExperience.initial_url	string		
analysisUTCTimestamp	string	O carimbo de data/hora UTC dessa análise.	
lighthouseResult	nested object	Resposta do Lighthouse para o URL de auditoria como um objeto.	
lighthouseResult.requestedUrl	string	URL original solicitado.	
lighthouseResult.finalUrl	string	O URL resolvido final que foi auditado.	
lighthouseResult.lighthouseVersion	string	A versão do farol usada para gerar esse LHR.	
lighthouseResult.userAgent	string	O user agent usado para executar este LHR.	
lighthouseResult.fetchTime	string	O horário em que essa execução foi buscada.	
lighthouseResult.environment	object	Configurações do ambiente que foram usadas ao fazer esse LHR.	
lighthouseResult.environment.networkUserAgent	string		
lighthouseResult.environment.hostUserAgent	string		
lighthouseResult.environment.benchmarkIndex	double		
lighthouseResult.runWarnings[]	list	Lista de todos os avisos de execução no LHR. A saída será sempre pelo menos `[]`.	
lighthouseResult.configSettings	object	São as configurações deste LHR.	
lighthouseResult.configSettings.emulatedFormFactor	string	O formato da emulação precisa usar

Os valores aceitáveis são:
"UNKNOWN_FORM_FACTOR"
"desktop"
"mobile"
"none"
lighthouseResult.configSettings.locale	string	Configuração da localidade	
lighthouseResult.configSettings.onlyCategories	nested object		
lighthouseResult.audits	object	Mapa de auditorias no LHR.	
lighthouseResult.audits.(key)	nested object		
lighthouseResult.audits.(key).id	string	O ID da auditoria.	
lighthouseResult.audits.(key).title	string	É o título legível.	
lighthouseResult.audits.(key).description	string	A descrição da auditoria.	
lighthouseResult.audits.(key).score	nested object		
lighthouseResult.audits.(key).scoreDisplayMode	string	O modo de exibição da pontuação enumerada.

Os valores aceitáveis são:
"SCORE_DISPLAY_MODE_UNSPECIFIED"
"binary"
"error"
"informative"
"manual"
"not_applicable"
"numeric"
lighthouseResult.audits.(key).displayValue	string	O valor que será exibido na IU para esta auditoria.	
lighthouseResult.audits.(key).explanation	string	Uma explicação dos erros na auditoria.	
lighthouseResult.audits.(key).errorMessage	string	Uma mensagem de erro gerada por um erro na auditoria.	
lighthouseResult.audits.(key).warnings	nested object		
lighthouseResult.audits.(key).details	object	Seção de detalhes de forma livre da auditoria.	
lighthouseResult.audits.(key).details.(key)	any value		
lighthouseResult.categories	object	Mapa de categorias no LHR.	
lighthouseResult.categories.(key)	nested object		
lighthouseResult.categories.(key).id	string	Identificador de string da categoria.	
lighthouseResult.categories.(key).title	string	Nome legível da categoria.	
lighthouseResult.categories.(key).description	string	Uma descrição mais detalhada da categoria e a importância dela.	
lighthouseResult.categories.(key).score	nested object		
lighthouseResult.categories.(key).manualDescription	string	Uma descrição das auditorias manuais da categoria.	
lighthouseResult.categories.(key).auditRefs[]	list	Uma matriz de referências a todos os membros da auditoria desta categoria.	
lighthouseResult.categories.(key).auditRefs[].id	string	O ID de referência de auditoria.	
lighthouseResult.categories.(key).auditRefs[].weight	double	O peso dessa pontuação de auditoria na pontuação geral da categoria.	
lighthouseResult.categories.(key).auditRefs[].group	string	O grupo de categorias a que a auditoria pertence (opcional).	
lighthouseResult.categoryGroups	object	Mapa de grupos de categoria no LHR.	
lighthouseResult.categoryGroups.(key)	object		
lighthouseResult.categoryGroups.(key).title	string		
lighthouseResult.categoryGroups.(key).description	string		
lighthouseResult.runtimeError	object	Objeto que contém o código + a mensagem de todos os erros de tempo de execução gerados.	
lighthouseResult.runtimeError.code	string	

Os valores aceitáveis são:
"ERRORED_DOCUMENT_REQUEST"
"FAILED_DOCUMENT_REQUEST"
"INSECURE_DOCUMENT_REQUEST"
"INVALID_SPEEDLINE"
"NO_DCL"
"NO_DOCUMENT_REQUEST"
"NO_ERROR"
"NO_FCP"
"NO_NAVSTART"
"NO_SCREENSHOTS"
"NO_SPEEDLINE_FRAMES"
"NO_TRACING_STARTED"
"PARSING_PROBLEM"
"PROTOCOL_TIMEOUT"
"READ_FAILED"
"SPEEDINDEX_OF_ZERO"
"TRACING_ALREADY_STARTED"
"UNKNOWN_ERROR"
lighthouseResult.runtimeError.message	string		
lighthouseResult.timing	object	Informações de tempo para este LHR.	
lighthouseResult.timing.total	double	A duração total da execução do Lighthouse	
lighthouseResult.i18n	object	As strings de internacionalização que são necessárias para renderizar o LHR.	
lighthouseResult.i18n.rendererFormattedStrings	object		
lighthouseResult.i18n.rendererFormattedStrings.varianceDisclaimer	string		
lighthouseResult.i18n.rendererFormattedStrings.opportunityResourceColumnLabel	string		
lighthouseResult.i18n.rendererFormattedStrings.opportunitySavingsColumnLabel	string		
lighthouseResult.i18n.rendererFormattedStrings.errorMissingAuditInfo	string		
lighthouseResult.i18n.rendererFormattedStrings.errorLabel	string		
lighthouseResult.i18n.rendererFormattedStrings.warningHeader	string		
lighthouseResult.i18n.rendererFormattedStrings.auditGroupExpandTooltip	string		
lighthouseResult.i18n.rendererFormattedStrings.passedAuditsGroupTitle	string		
lighthouseResult.i18n.rendererFormattedStrings.notApplicableAuditsGroupTitle	string		
lighthouseResult.i18n.rendererFormattedStrings.manualAuditsGroupTitle	string		
lighthouseResult.i18n.rendererFormattedStrings.toplevelWarningsMessage	string		
lighthouseResult.i18n.rendererFormattedStrings.scorescaleLabel	string		
lighthouseResult.i18n.rendererFormattedStrings.crcLongestDurationLabel	string		
lighthouseResult.i18n.rendererFormattedStrings.crcInitialNavigation	string		
lighthouseResult.i18n.rendererFormattedStrings.lsPerformanceCategoryDescription	string		
lighthouseResult.i18n.rendererFormattedStrings.labDataTitle	string	
