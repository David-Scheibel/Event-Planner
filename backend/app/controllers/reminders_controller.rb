class RemindersController < ApplicationController

    def index
        reminders = Reminder.all

        render json: reminders
    end

    def show
        reminder = Reminder.find(params[:id])

        render json: reminder
    end

    def create
        reminder = Reminder.create!(reminder_params)

        render json: reminder
    end

    def update
        reminder = Reminder.find(params[:id])

        render json: reminder
    end


    private

    def reminder_params
        params.require(:reminder).permit!
    end

end
