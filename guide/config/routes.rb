Rails.application.routes.draw do
  scope({path: 'api'}){
      resources(:attractions)
    }
end
