class RemindersController < ApplicationController

    def index
        reminders = Reminder.all

        render json: reminders
    end

end
