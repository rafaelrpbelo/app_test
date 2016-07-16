Rails.application.routes.draw do
  root 'main#index'

  get 'font-awesome'    => 'main#font_awesome'
  get 'test-controller' => 'main#test_controller'
end
