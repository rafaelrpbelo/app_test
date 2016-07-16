require 'rails_helper'

describe MainController, type: :controller do
  it 'test_controller' do
    get :test_controller
    expect(assigns(:people)).to eq ['Rafael', 'Thaís', 'Davi']
  end
end
