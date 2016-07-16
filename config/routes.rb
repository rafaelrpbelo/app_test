Rails.application.routes.draw do
  root 'main#index'

  get 'test-controller' => 'main#test_controller'
end
